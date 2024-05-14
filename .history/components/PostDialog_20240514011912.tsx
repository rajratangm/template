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
import Image from "next/image";

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
        </DialogHeader>

        <form>
          <div className="flex flex-col">
            <Textarea
              id="name"
              name="inputText"
              className="border-none text-lg focus-visible:ring-0"
              placeholder="Type your message here."
            />
            <div className="my-4">
                yaha per image upload ayega


            </div>
          </div>
          <div>

          </div>


          <DialogFooter>
                        <div className="flex items-center gap-4">
                            <input  type="file" name="image" className="hidden" accept="image/*" />
                            <Button type="submit">Post</Button>
                        </div>
                    </DialogFooter>
        </form>

        <Button variant={'ghost'}>
            <Image className="text-blue-500" />
            <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
