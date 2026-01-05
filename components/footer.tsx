"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { LINKS, SPONSOR } from "@/constants";
import GithubIcon from "@/icons/github-icon";
import TwitterXIcon from "@/icons/twitter-x-icon";
import HeartIcon from "@/icons/heart-icon";
import RocketIcon from "@/icons/rocket-icon";
import StarIcon from "@/icons/star-icon";
import SparklesIcon from "@/icons/sparkles-icon";
import CoffeeIcon from "@/icons/coffee-icon";
import CodeIcon from "@/icons/code-icon";
import BulbSvg from "@/icons/bulb-svg";
import FlameIcon from "@/icons/flame-icon";
import LikeIcon from "@/icons/like-icon";
import BookmarkIcon from "@/icons/bookmark-icon";
import CameraIcon from "@/icons/camera-icon";
import MoonIcon from "@/icons/moon-icon";
import BellOffIcon from "@/icons/bell-off-icon";
import LockIcon from "@/icons/lock-icon";
import RefreshIcon from "@/icons/refresh-icon";
import GearIcon from "@/icons/gear-icon";
import MessageCircleIcon from "@/icons/message-circle-icon";
import SendIcon from "@/icons/send-icon";
import CurrencyBitcoinIcon from "@/icons/currency-bitcoin-icon";
import CurrencyEthereumIcon from "@/icons/currency-ethereum-icon";
import SolanaIcon from "@/icons/solana-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CryptoButton = ({ address, icon, label }: { address: string; icon: React.ReactNode; label: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <TooltipProvider>
      <Tooltip open={copied ? true : undefined}>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            className="hover:bg-accent flex cursor-pointer items-center justify-center rounded-lg border p-2 transition-colors"
            aria-label={`Copy ${label} address`}
          >
            {icon}
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{copied ? "Copied!" : `Copy ${label} address`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Footer = () => {
  const featuredIcons = [
    { Icon: HeartIcon, name: "heart" },
    { Icon: RocketIcon, name: "rocket" },
    { Icon: StarIcon, name: "star" },
    { Icon: SparklesIcon, name: "sparkles" },
    { Icon: CoffeeIcon, name: "coffee" },
    { Icon: CodeIcon, name: "code" },
    { Icon: BulbSvg, name: "bulb" },
    { Icon: FlameIcon, name: "flame" },
    { Icon: LikeIcon, name: "like" },
    { Icon: BookmarkIcon, name: "bookmark" },
    { Icon: CameraIcon, name: "camera" },
    { Icon: MoonIcon, name: "moon" },
    { Icon: BellOffIcon, name: "bell-off" },
    { Icon: LockIcon, name: "lock" },
    { Icon: RefreshIcon, name: "refresh" },
    { Icon: GearIcon, name: "gear" },
    { Icon: MessageCircleIcon, name: "message" },
    { Icon: SendIcon, name: "send" },
    { Icon: GithubIcon, name: "github" },
    { Icon: TwitterXIcon, name: "twitter" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t"
    >
      <div className="w-full px-4 py-12 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/icons"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Icons
              </Link>
              <Link
                href="/sponsor"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sponsor
              </Link>
              <Link
                href={LINKS.GITHUB}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sponsor</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href={SPONSOR.buymeacoffee}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
              >
                <CoffeeIcon size={16} />
                Buy Me a Coffee
              </Link>
              <div className="text-muted-foreground space-y-2 text-sm">
                <p className="text-foreground font-medium">Crypto</p>
                <div className="flex items-center gap-2">
                  <CryptoButton
                    address={SPONSOR.btc}
                    icon={<CurrencyBitcoinIcon className="h-5 w-5 text-orange-500" />}
                    label="BTC"
                  />
                  <CryptoButton
                    address={SPONSOR.eth}
                    icon={<CurrencyEthereumIcon className="h-5 w-5 text-purple-500" />}
                    label="ETH"
                  />
                  <CryptoButton
                    address={SPONSOR.sol}
                    icon={<SolanaIcon className="h-5 w-5 text-green-500" />}
                    label="SOL"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Featured Icons</h3>
            <div className="grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10">
              {featuredIcons.map(({ Icon, name }) => (
                <Link key={name} href="/icons">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="hover:bg-accent flex cursor-pointer items-center justify-center rounded-lg border p-2 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground flex items-center gap-1 text-center text-sm">
              Built with{" "}
              <HeartIcon className="inline h-4 w-4 text-red-500" />
              {" "}by{" "}
              <Link
                href={LINKS.CREATOR}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground font-medium underline underline-offset-4 transition-colors"
              >
                Abhijit
              </Link>
              . The source code is available on{" "}
              <Link
                href={LINKS.GITHUB}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground font-medium underline underline-offset-4 transition-colors"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
