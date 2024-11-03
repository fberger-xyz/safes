import IconWrapper from '@/components/common/IconWrapper'
// import IframeWrapper from '@/components/common/IframeWrapper'
// import LinkWithIcon from '@/components/common/LinkWithIcon'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
// import ExcalidrawSVG from '@/components/excalidraw/ExcalidrawSVG'
import { IconIds } from '@/enums'

export default function Page() {
    return (
        <PageWrapper className="mb-10 gap-5">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col">
                    <LinkWrapper href="" className="flex w-fit items-baseline gap-1 underline-offset-4 hover:underline">
                        <p className="w-full text-xl text-primary md:text-3xl">Safes Trades</p>
                        <IconWrapper icon={IconIds.IC_BASELINE_OPEN_IN_NEW} className="h-6 w-6 text-inactive" />
                    </LinkWrapper>
                    <p className="text-xs text-default">Tba</p>
                </div>
                <div className="flex w-full flex-col items-end pl-4">
                    <p className="text-secondary">Summary</p>
                    <p className="text-xs text-default">1. Preview</p>
                    <p className="text-xs text-default">2. Why did I code this?</p>
                    <p className="text-xs text-default">3. How it works</p>
                    <p className="text-xs text-default">Conclusion</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">1. Preview</p>
                {/* <IframeWrapper src="https://better-farside.vercel.app/" width="w-full" height="h-[400px]" /> */}
            </div>
            <div className="flex w-full flex-col gap-2 border-t border-light-hover py-4">
                <p className="text-secondary">2. Why did I code this?</p>
                <div className="flex flex-wrap items-baseline gap-2">
                    <p className="text-sm text-default">- to automate loops, limit orders and small leverages on lending markets</p>
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">3. How it works</p>
                <div className="flex w-full flex-col items-center">
                    {/* <ExcalidrawSVG src="/better-farside" className="w-full p-2" /> */}
                    {/* <p className="text-xs italic text-inactive">It's that simple</p> */}
                </div>
            </div>
            <div className="flex w-full flex-col gap-1 border-t border-light-hover py-4">
                <p className="text-secondary">Conclusion</p>
                {/* <p className="text-sm text-default">
                    Using these tools, one developer can achieve what would require a full team in the corporate world.
                </p> */}
            </div>
        </PageWrapper>
    )
}
