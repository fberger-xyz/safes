import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'
import { ReactNode } from 'react'

function SkillsLine(props: { skills: string[] }) {
    return (
        <div className="mt-2 flex w-full flex-wrap justify-end gap-1 text-xs">
            {props.skills.map((skill) => (
                <div className="flex w-fit items-center border border-inactive px-1 py-0.5">
                    <p className="text-nowrap text-inactive group-hover:text-primary">{skill}</p>
                </div>
            ))}
        </div>
    )
}

function ProjectCard({
    target = '_self',
    ...props
}: {
    children: ReactNode
    path: AppPagePaths | string
    target?: '_blank' | '_self' | '_parent' | '_top'
}) {
    return (
        <div className="group w-full border border-light-hover p-0.5">
            <LinkWrapper
                href={props.path}
                target={target}
                className="flex w-full flex-col rounded-sm border border-light-hover p-1 transition duration-500 hover:border-primary"
            >
                {props.children}
            </LinkWrapper>
        </div>
    )
}

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <p className="text-sm text-default">Side projects I can publicly speak about</p>
            <div className="flex w-full flex-col gap-3">
                <div className="flex w-full flex-col gap-3">
                    {/* <ProjectCard path={AppPagePaths.PROJECTS}>
                        <p className="text-primary">Aptos Liquidation bot</p>
                        <p className="text-sm text-secondary">Nov 2024</p>
                        <p className="text-sm text-secondary">🚧</p>
                        <SkillsLine skills={['Autism']} />
                    </ProjectCard> */}
                    <ProjectCard path={AppPagePaths.PROJECTS_SAFES_TRADES}>
                        <div className="flex justify-between">
                            <p className="text-primary">Safes Trades</p>
                            <p className="text-xs text-secondary">Nov 2024</p>
                        </div>
                        <p className="text-xs text-default">WIP</p>
                        <SkillsLine skills={['Next', 'Gnosis Safe', '1inch', 'Cowswap', 'Vercel']} />
                    </ProjectCard>
                    <ProjectCard path={AppPagePaths.PROJECTS_BETTER_FARSIDE}>
                        <div className="flex justify-between">
                            <p className="text-primary">Better Farside</p>
                            <p className="text-xs text-secondary">Nov 2024</p>
                        </div>
                        <p className="text-xs text-default">Time to code: 4 days</p>
                        <SkillsLine skills={['Next', 'Xata DB', 'Prisma', 'Inngest', 'Grammy', 'Vercel']} />
                    </ProjectCard>
                    {/* <ProjectCard path={AppPagePaths.PROJECTS}>
                        <p className="text-primary">Seed encrypt</p>
                        <p className="text-xs text-secondary">Nov 2024</p>
                        <p className="text-xs text-secondary">Time to code: 2 days</p>
                        <SkillsLine skills={['BIP44', 'Next']} />
                    </ProjectCard> */}
                </div>
                {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Nov 2024</p>
                    <p className="text-base text-secondary">Risk and DeFi Developer @CoinShares</p>
                    <p className="text-xs text-inactive">Nov 2021</p>
                </div> */}
                <ProjectCard
                    path="https://www.linkedin.com/posts/francis-berger-a2404094_degen-web3-nft-activity-6879062483768795136-WomP?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                >
                    <div className="flex justify-between">
                        <p className="text-primary">NFT stonks</p>
                        <p className="text-xs text-secondary">Oct 2021</p>
                    </div>
                    <p className="text-xs text-default">Time to code: 3 weeks</p>
                    <SkillsLine skills={['VueJS', 'OpenSea API', 'Etherscan API', 'Coingecko API', 'Google Cloud', 'Netlify']} />
                </ProjectCard>
                {/* <div className="my-2 ml-4 flex flex-col justify-center border-l border-dotted border-primary p-4">
                    <p className="text-xs text-inactive">Oct 2021</p>
                    <p className="text-base text-secondary">Full Stack Developer @StationF</p>
                    <p className="text-xs text-inactive">Janv 2021</p>
                </div> */}
            </div>
        </PageWrapper>
    )
}
