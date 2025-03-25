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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";

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
              Get early access to the app and be the first to know when it
              launches.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-row items-center gap-2">
            <Input
              className="w-full"
              type="email"
              placeholder="you@example.com"
            />
            <Button className="w-fit" type="submit">
              Join waitlist
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
            Get early access to the app and be the first to know when it
            launches.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-row items-center gap-2 px-4">
          <Input
            className="w-full"
            type="email"
            placeholder="you@example.com"
          />
          <Button className="w-fit" type="submit">
            Join waitlist
          </Button>
        </div>
        <DrawerFooter className="pt-2 mt-8 mb-8">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
