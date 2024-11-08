'use client'

import PageWrapper from '@/components/common/PageWrapper'
import { useSearchParams } from 'next/navigation'
import { ethers } from 'ethers'
import { ParsedParam, useParamsStore } from '@/stores/params.store'
import { useEffect } from 'react'
import { cn, shortenAddress } from '@/utils'
import IconWrapper from '@/components/common/IconWrapper'
import { IconIds, SupportedChains } from '@/enums'
import { chainsConfig, supportedCategoriesConfig } from '@/config/app.config'
import Image from 'next/image'
import LinkWrapper from '@/components/common/LinkWrapper'
import SvgMapper from '@/components/common/SvgMapper'
import { copyToClipboard, linkForChainAppAndAddress } from '@/utils/apps.util'
import { useRouter } from 'next/navigation'
import { toastStyle } from '@/config/toasts.config'
import toast from 'react-hot-toast'

export default function Page() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { selectedSafe, selectedChain, parsedSafes, actions } = useParamsStore()

    useEffect(() => {
        // parse safes
        const _rawSafes = searchParams.get('safes') ?? ''
        const _splittedSafes = _rawSafes.split(',')
        const _parsedSafes: ParsedParam[] = []
        let _selected = ''
        if (Array.isArray(_splittedSafes)) {
            for (let paramIndex = 0; paramIndex < _splittedSafes.length; paramIndex++) {
                const value = String(_splittedSafes[paramIndex]).trim().toLowerCase()
                if (_parsedSafes.some((param) => param.value === value)) continue
                const isAddress = ethers.isAddress(value)
                if (!_selected && isAddress) _selected = value
                _parsedSafes.push({ value, isAddress })
            }
        }
        if (!_selected) _parsedSafes.push({ value: '0xC234E41AE2cb00311956Aa7109fC801ae8c80941', isAddress: true })

        // parse address
        const _rawChain = String(searchParams.get('chain')).toLowerCase()

        // router
        const _parsedChain = _rawChain in SupportedChains ? (_rawChain as unknown as SupportedChains) : SupportedChains.ETH
        router.push(
            `?chain=${_parsedChain}&safes=${_parsedSafes
                .filter((param) => param.isAddress)
                .map((address) => address.value)
                .join(',')}`,
        )

        // set store
        actions.setParams(_rawSafes, _parsedSafes, _selected, String(searchParams.get('chain')).toLowerCase(), _parsedChain)
    }, [searchParams])

    return (
        <PageWrapper className="mb-10 gap-5">
            <div className="flex w-full flex-col gap-2.5 border-l border-light-hover">
                {/* addresses */}
                <p className="pl-5 text-light-hover">safes</p>
                <div className="flex items-start gap-2.5 border-b border-light-hover pb-5 pl-5">
                    {parsedSafes
                        .filter((param) => param.isAddress)
                        .map((address, addressIndex) => (
                            <div key={address.value} className="flex w-full items-center gap-3">
                                <p className="text-inactive">{addressIndex + 1}</p>
                                <button
                                    className={cn('flex gap-3 rounded-md border px-2.5 py-1.5 transition-all duration-100', {
                                        'bg-light-hover border-primary text-primary': selectedSafe === address.value,
                                        'text-inactive hover:text-primary border-light-hover': selectedSafe !== address.value,
                                    })}
                                    onClick={() => actions.setSelectedAddress(address.value)}
                                >
                                    {address.isAddress ? <p>{shortenAddress(address.value)}</p> : <p>{address.value}</p>}
                                </button>
                                <button className="flex items-center text-inactive hover:text-primary">
                                    <IconWrapper icon={IconIds.CARBON_COPY} className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                </div>

                {/* chains */}
                <p className="pl-5 text-light-hover">chains</p>
                <div className="flex items-start gap-2.5 border-b border-light-hover pb-5 pl-5">
                    {Object.values(chainsConfig)
                        .sort((curr, next) => curr.index - next.index)
                        .map((chain) => (
                            <div key={chain.id} className="flex items-center gap-1.5">
                                <button
                                    className={cn('flex gap-3 rounded-md border px-2.5 py-1.5 transition-all duration-100', {
                                        'text-primary bg-light-hover border-primary': selectedChain === chain.id,
                                        'text-inactive hover:text-primary border-light-hover': selectedChain !== chain.id,
                                    })}
                                    onClick={() => actions.setSelectedChain(chain.id)}
                                >
                                    <Image
                                        src={`https://safe-transaction-assets.safe.global/chains/${chain.id}/chain_logo.png`}
                                        width={24}
                                        height={24}
                                        alt={chain.gnosisPrefix}
                                    />
                                </button>
                            </div>
                        ))}
                </div>

                {/* apps */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 border-b border-light-hover pb-5 pl-5">
                    {supportedCategoriesConfig.map((category) => (
                        <div key={category.name} className="flex flex-col gap-2.5">
                            <p className="w-12 text-light-hover">{category.name}</p>
                            <div className="flex gap-1.5">
                                {category.apps.map((app) => (
                                    <div
                                        key={app.id}
                                        className={cn('flex items-center gap-3 rounded-md border border-light-hover px-2.5 py-1.5', {
                                            'opacity-10': !app.networks.includes(selectedChain),
                                        })}
                                    >
                                        <LinkWrapper
                                            target="_blank"
                                            className={cn('flex items-center gap-3', {
                                                group: app.networks.includes(selectedChain),
                                                'cursor-not-allowed': !app.networks.includes(selectedChain),
                                            })}
                                            disabled={!app.networks.includes(selectedChain)}
                                            href={linkForChainAppAndAddress(chainsConfig[selectedChain], app, selectedSafe)}
                                        >
                                            {app.svg ? (
                                                <SvgMapper icon={app.svg} className="size-6 text-inactive" />
                                            ) : (
                                                <Image src={app.iconUrl} width={22} height={22} alt={app.id} className="rounded-full" />
                                            )}
                                            <IconWrapper
                                                icon={IconIds.IC_BASELINE_OPEN_IN_NEW}
                                                className="size-4 text-inactive group-hover:text-primary"
                                            />
                                        </LinkWrapper>
                                        <button
                                            disabled={!app.networks.includes(selectedChain)}
                                            onClick={() => {
                                                copyToClipboard(linkForChainAppAndAddress(chainsConfig[selectedChain], app, selectedSafe))
                                                toast.success('Copied', { style: toastStyle })
                                            }}
                                            className={cn('text-inactive', {
                                                'hover:text-primary': app.networks.includes(selectedChain),
                                                'cursor-not-allowed': !app.networks.includes(selectedChain),
                                            })}
                                        >
                                            <IconWrapper icon={IconIds.CARBON_COPY} className="size-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* pending orders */}
                <p className="pl-5 text-light-hover">reach out on telegram to suggest another section</p>
            </div>
        </PageWrapper>
    )
}
