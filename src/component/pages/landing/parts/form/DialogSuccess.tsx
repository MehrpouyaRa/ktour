import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/component/common/dialog'
import { Button } from '@/component/common/ui/button'

interface IDialog {
    open: boolean
    triggerClose(): void
}

function DialogSuccess({ open, triggerClose }: IDialog) {
    return (
        <Dialog open={open}>
            <DialogContent className="flex flex-col sm:max-w-sm" showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>توجه فرمائید</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-1">
                    <p>برای <strong className='text-[var(--color-primary)]'>تکمیل فرایند ثبت نام</strong> و اخذکارت وکد زائر به آدرس ذیل مراجعه نمایید</p>
                    <p>نیشابور :خیابان مدرس روبه روی مدرس ۵ کارگزاری رسمی بیمه بوژمهرانی.</p>
                    <p>ساعات مراجعه ۹صبح تا ۱:۳۰</p>
                    <p>بعدظهر ۱۷ تا ۲۰</p>
                </div>
                <div className='flex flex-row w-full justify-between'>
                    <Button type="submit" onClick={triggerClose}>متوجه شدم</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogSuccess