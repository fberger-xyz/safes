import LinkWithIcon from '@/components/common/LinkWithIcon'
import PageWrapper from '@/components/common/PageWrapper'
// import { APP_METADATA } from '@/config/app.config'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <p className="text-sm text-default">Life and career</p>
            {/* socials */}
            {/* <div className="flex flex-col gap-2">
                <p className="font-bold">Contacts</p>
                <ul className="flex flex-col gap-1 text-sm text-default">
                    <li className="flex gap-2 text-default">
                        Telegram
                        <span className="text-secondary">@{APP_METADATA.TELEGRAM}</span>
                    </li>
                    <li className="flex gap-2">
                        Twitter
                        <LinkWithIcon href={`https://x.com/${APP_METADATA.SOCIAL_TWITTER}`}>
                            <span>@{APP_METADATA.SOCIAL_TWITTER}</span>
                        </LinkWithIcon>
                    </li>
                    <li className="flex gap-2 text-default">
                        Linkedin
                        <LinkWithIcon href={`https://www.linkedin.com/in/${APP_METADATA.LINKEDIN}`}>
                            <span>Profile</span>
                        </LinkWithIcon>
                    </li>
                </ul>
            </div> */}

            {/* xp */}
            <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                    <p>Experiences</p>
                    <p className="text-xs italic text-light-hover">Excluding freelance and side projects</p>
                </div>
                <ul className="flex flex-col gap-3 text-default sm:gap-1">
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Self</p>
                            <p className="text-sm">Dec 2024 - now</p>
                        </div>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Risk and DeFi Developer</p>
                            <p className="text-sm">Nov 2021 {'>'} Nov 2024</p>
                            <LinkWithIcon href="https://coinshares.com/">
                                <p className="text-base">CoinShares</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">&#x2022; Coded frontends and backends used daily by ops, quants, traders and top management</p>
                        <p className="pl-4 text-sm">1) to monitor P&L and risk exposure (hedge funds, lending and staking activities)</p>
                        <p className="pl-4 text-sm">2) to monitor trading strategies (positions, volatility surfaces, greeks)</p>
                        <p className="pl-4 text-sm">3) to adapt strategies to economic calendar</p>
                        <p className="text-sm">&#x2022; Research and training on Staking and DeFi</p>
                        <p className="text-sm">&#x2022; Shipped an operational DeFi dApp (hardhat, ethers, the Graph)</p>
                        <p className="text-sm">&#x2022; Run ethereum nodes (with https access)</p>
                        <p className="text-sm">&#x2022; Worked hard to improve CS legacy stack (vite, tailwind, zustand, eslint/prettier)</p>
                        <p className="text-sm underline">Left to focus on DeFi</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Full-Stack Developer</p>
                            <p className="text-sm">Jan 2021 {'>'} Oct 2021</p>
                            <LinkWithIcon href="https://stationf.co/">
                                <p className="text-base">Station F</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">&#x2022; Best practices to engineer + commit a clean code (unit, integration, e2e tests)</p>
                        <p className="text-sm underline">Left to work in crypto</p>
                    </li>
                    <li className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <p className="text-secondary">Transaction Services Analyst</p>
                            <p className="text-sm">2017 ; 2019</p>
                            <LinkWithIcon href="https://www.grantthornton.fr/fr/secteurs/capital-investissement/">
                                <p className="text-base">Grant Thornton</p>
                            </LinkWithIcon>
                        </div>
                        <p className="text-sm">&#x2022; Small & mid cap valuations in M&A context, waterfalls, statistical modelling</p>
                        <p className="text-sm">&#x2022; Memorandum, due diligences, litigation support</p>
                        <p className="text-sm underline">Left to pivot in tech</p>
                    </li>
                </ul>
            </div>

            {/* studies */}
            <div className="flex flex-col gap-1">
                <p>Studies</p>
                <ul className="text-default">
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">42</p>
                        <p className="text-sm">2020</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">DSCG</p>
                        <p className="text-sm">(french CPA)</p>
                        <p className="text-sm">2019</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">Msc. Corporate Finance</p>
                        <p className="text-sm">2019</p>
                    </li>
                    <li className="flex items-baseline gap-2">
                        <p className="text-secondary">Le Wagon</p>
                        <p className="text-sm">2017</p>
                    </li>
                </ul>
            </div>
        </PageWrapper>
    )
}
