import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Textarea } from "@/components/ui/textarea";


export function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any;
  open: boolean;
  src: string;
}) {
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => {
          setOpen;
        }}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <ProfilePhoto src={src} />
            <div>
              <h1>Rajratan MERN Project</h1>
              <p className="text-xs">Post to anyone</p>
            </div>
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        <form>
            <div className="flex flex-col">
            <Textarea 
            placeholder="Type your message here." />


            </div>
        </form>
        
      </DialogContent>
    </Dialog>
  );
}
