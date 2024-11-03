import { SupportedChains, AppThemes, IconIds, SupportedApps, SupportedAppsCategories, SupportedSocials } from '@/enums'
import { SupportedAppConfig, SupportedChainConfig } from '@/interfaces'

export const APP_METADATA = {
    SITE_AUTHOR: 'fberger',
    SITE_NAME: 'safes-trades',
    SITE_INFO: 'SITE_INFO',
    SITE_DESCRIPTION: 'SITE_DESCRIPTION',
    SITE_URL: 'https://safes-trades.vercel.app/',
    SOCIALS: {
        TWITTER: 'fberger_xyz',
        TELEGRAM: 'fberger_xyz',
        LINKEDIN: 'francis-berger-a2404094',
    },
}

export const APP_THEMES: Partial<Record<AppThemes, { index: number; iconId: IconIds }>> = {
    [AppThemes.LIGHT]: { index: 0, iconId: IconIds.THEME_LIGHT },
    [AppThemes.DARK]: { index: 1, iconId: IconIds.THEME_DARK },
}

/**
 * specific
 */

export const chainsConfig: Record<SupportedChains, SupportedChainConfig> = {
    [SupportedChains.ETH]: { index: 1, id: SupportedChains.ETH, gnosisPrefix: 'eth' },
    [SupportedChains.ARBITRUM]: { index: 2, id: SupportedChains.ARBITRUM, gnosisPrefix: 'arb' },
    [SupportedChains.BASE]: { index: 3, id: SupportedChains.BASE, gnosisPrefix: 'base' },
    [SupportedChains.GNOSIS]: { index: 4, id: SupportedChains.GNOSIS, gnosisPrefix: 'gno' },
}

export const supportedCategoriesConfig: { name: SupportedAppsCategories; apps: SupportedAppConfig[] }[] = [
    {
        name: SupportedAppsCategories.OWN,
        apps: [
            {
                id: SupportedApps.SAFE,
                svg: IconIds.SAFE,
                name: 'Safe',
                iconUrl: 'https://pbs.twimg.com/profile_images/1643941027898613760/gyhYEOCE_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/8467082/1715770781/1080x360',
                description: 'Largest smart account ecosystem on the EVM',
                tags: ['Multisig'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'todo',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'todo',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/safe',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.safe.global',
                    },
                ],
            },
            {
                id: SupportedApps.ONCHAINDEN,
                svg: undefined,
                name: 'Onchain Den',
                iconUrl: 'https://pbs.twimg.com/profile_images/1838330609543880704/55neQ_sj_400x400.png',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1475562072872304644/1727127470/1080x360',
                description: 'The fastest multisig for onchain teams',
                tags: ['Multisig'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/OnChainDen',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://www.onchainden.com/',
                    },
                ],
            },
        ],
    },
    {
        name: SupportedAppsCategories.LEND,
        apps: [
            {
                id: SupportedApps.AAVE,
                svg: IconIds.AAVE,
                name: 'Aave',
                iconUrl: 'https://pbs.twimg.com/profile_images/1808921860781821952/CmtvkzWo_400x400.png',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1719825249397604352/1698873437/1080x360',
                description: 'Building the future of DeFi',
                tags: ['DeFi', 'Lending/Borrowing'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/CvKUrqM',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/aave',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://twitter.com/aaveaave',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.aave.com',
                    },
                ],
            },
            {
                id: SupportedApps.MORPHO,
                svg: IconIds.MORPHO,
                name: 'Morpho',
                iconUrl: 'https://pbs.twimg.com/profile_images/1712024635590455296/ksuEkiF7_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1420789685811650560/1697013456/1080x360',
                description: 'Earn, Borrow, Build on Morpho',
                tags: ['DeFi', 'Lending/Borrowing'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/BWXbJMHMdz/',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/morpho-org',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/MorphoLabs',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.morpho.org/',
                    },
                ],
            },
        ],
    },
    {
        name: SupportedAppsCategories.TRADE,
        apps: [
            {
                id: SupportedApps.COWSWAP,
                svg: IconIds.COWSWAP,
                name: 'CoW Swap',
                iconUrl: 'https://pbs.twimg.com/profile_images/1805606768266924032/nzzLCHXW_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1383143419128782848/1719325175/1080x360',
                description: 'User-protective products for Ethereum',
                tags: ['Aggregator', 'DAO Tooling', 'MEV Protection'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/cowprotocol',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/cowprotocol',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://twitter.com/CoWSwap',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://swap.cow.fi',
                    },
                ],
            },
            {
                id: SupportedApps.ONEINCH,
                svg: IconIds.ONEINCH,
                name: '1inch',
                iconUrl: 'https://pbs.twimg.com/profile_images/1803771489025470466/JSzaEa9X_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1137038394503114753/1718887613/1080x360',
                description: 'Trustless, non-custodial, on-chain trading platform',
                tags: ['Aggregator', 'DAO Tooling', 'MEV Protection'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'todo',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'todo',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/1inch',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.1inch.io/',
                    },
                ],
            },
            {
                id: SupportedApps.DEFI_SAVER,
                svg: IconIds.DEFI_SAVER,
                name: 'DeFi Saver',
                iconUrl: 'https://pbs.twimg.com/profile_images/1717844708083347456/02FNBrqO_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1120736534704066561/1698401070/1080x360',
                description: 'DeFi management dashboard',
                tags: ['Automation', 'Dashboard', 'DeFi'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: 'https://discord.com/invite/XGDJHhZ',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: 'https://github.com/defisaver/defisaver-v3-contracts',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/DeFiSaver',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://defisaver.com/',
                    },
                ],
            },
        ],
    },
    {
        name: SupportedAppsCategories.TRACK,
        apps: [
            {
                id: SupportedApps.DEBANK,
                svg: IconIds.DEBANK,
                name: 'Debank',
                iconUrl: 'https://pbs.twimg.com/profile_images/1414880725921267716/YzVitob7_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1156037602488639490/1715323254/1080x360',
                description: 'The Real User Based Web3 Community',
                tags: ['Portfolio tracker'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/DeBankDeFi',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://debank.com/',
                    },
                ],
            },
            {
                id: SupportedApps.ZERION,
                svg: IconIds.ZERION,
                name: 'Zerion',
                iconUrl: 'https://pbs.twimg.com/profile_images/1639841598648512515/RXG5M-pv_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/895030804383969283/1687375429/1080x360',
                description: 'Your crypto wallet for everything onchain',
                tags: ['Portfolio tracker'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/zerion',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://app.zerion.io',
                    },
                ],
            },
            {
                id: SupportedApps.ZAPPER,
                svg: IconIds.ZAPPER,
                name: 'Zapper',
                iconUrl: 'https://pbs.twimg.com/profile_images/1681396816737181707/MZVvpTPr_400x400.jpg',
                bannerUrl: 'https://pbs.twimg.com/profile_banners/1208076242366283776/1704754033/1080x360',
                description: 'Track your DeFi and NFT portfolio',
                tags: ['Portfolio tracker'],
                socialProfiles: [
                    {
                        platform: SupportedSocials.DISCORD,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.GITHUB,
                        url: '',
                    },
                    {
                        platform: SupportedSocials.TWITTER,
                        url: 'https://x.com/zapper_fi',
                    },
                    {
                        platform: SupportedSocials.WEBSITE,
                        url: 'https://zapper.xyz',
                    },
                ],
            },
        ],
    },
]
