import LinkWithIcon from '@/components/common/LinkWithIcon'
// import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
// import { AppPagePaths } from '@/enums'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            {/* tldr */}
            <div className="mt-4 flex flex-col gap-2">
                <p className="font-bold">Tldr;</p>
                <ul className="flex flex-col gap-1 text-sm text-default">
                    <li className="flex gap-3">
                        &#x2022;
                        <p>Into DeFi - always learning</p>
                    </li>
                    <li className="flex gap-3">
                        &#x2022;
                        <p>Senior Fullstack Dev</p>
                    </li>
                    <li className="flex gap-3">
                        &#x2022;
                        <p>Experiences in Risk Management and M&A</p>
                    </li>
                </ul>
            </div>

            {/* index */}
            {/* <div className="mt-4 flex flex-col gap-2">
                <p className="text-primary">Index</p>
                <ul className="flex flex-col gap-1 text-sm text-default">
                    <li className="flex gap-3">
                        &#x2022;
                        <LinkWrapper href={AppPagePaths.PROJECTS} className="underline-offset-4 hover:underline">
                            <p>
                                /<span className="text-secondary">projects</span>
                            </p>
                        </LinkWrapper>
                        <p>projects I can publicly speak about</p>
                    </li>
                    <li className="flex gap-3">
                        &#x2022;
                        <LinkWrapper href={AppPagePaths.ABOUT} className="underline-offset-4 hover:underline">
                            <p>
                                /<span className="text-secondary">about</span>
                            </p>
                        </LinkWrapper>
                        <p>life and career</p>
                    </li>
                </ul>
            </div> */}

            {/* context */}
            <div className="flex flex-col gap-2">
                <p className="font-bold">Contact</p>
                <p className="text-sm text-default">For any inquiries [contracting, hiring, investment], reach out on:</p>
                <ul className="flex flex-col gap-1 text-sm text-default">
                    <li className="flex gap-3">
                        &#x2022; Telegram
                        <LinkWithIcon href={`https://t.me/${APP_METADATA.SOCIALS.TELEGRAM}`}>@{APP_METADATA.SOCIALS.TELEGRAM}</LinkWithIcon>
                    </li>
                    <li className="flex gap-3">
                        &#x2022; Twitter
                        <LinkWithIcon href={`https://x.com/${APP_METADATA.SOCIALS.TWITTER}`}>@{APP_METADATA.SOCIALS.TWITTER}</LinkWithIcon>
                    </li>
                    <li className="flex gap-3">
                        &#x2022; Linkedin
                        <LinkWithIcon href={`https://www.linkedin.com/in/${APP_METADATA.SOCIALS.LINKEDIN}`}>Francis Berger</LinkWithIcon>
                    </li>
                </ul>
            </div>
        </PageWrapper>
    )
}
