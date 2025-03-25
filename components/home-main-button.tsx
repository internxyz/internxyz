"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";
import Link from "next/link";

export default function HomeMainButton() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center p-6 w-full">
            <Command />
            <span className="text-lg md:text-xl">Join waitlist</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join waitlist</DialogTitle>
            <DialogDescription>
              Subscribe to our Telegram channel to get early access to the app and be the first to know when it launches.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Button className="self-end w-fit">
              <Link target="_blank" href="https://t.me/intern_xyz">Subscribe in Telegram</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="flex items-center p-6 w-full">
          <Command />
          <span className="text-lg md:text-xl">Join waitlist</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Join waitlist</DrawerTitle>
          <DrawerDescription>
          Subscribe to our Telegram channel to get early access to the app and be the first to know when it launches.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-row items-center gap-2 px-4">
          <Button className="w-full" type="submit">
            <Link target="_blank" href="https://t.me/intern_xyz">Subscribe in Telegram</Link>
          </Button>
        </div>
        <DrawerFooter className="pt-2 mt-4 mb-8">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
