import CheckedIcon from "../components/CheckedIcon";
import SimpleCheckedIcon from "../components/SimpleCheckedIcon";
import FilledCheckedIcon from "../components/FilledCheckedIcon";
import FilledBellIcon from "../components/FilledBellIcon";
import RightCheveron from "../components/RightCheveron";
import DownCheveron from "../components/DownCheveron";
import RefreshIcon from "../components/RefreshIcon";
import LikeIcon from "@/components/LikeIcon";
import BulbSvg from "@/components/BulbSvg";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <CheckedIcon />
      <FilledCheckedIcon />
      <SimpleCheckedIcon />
      <FilledBellIcon />
      <RightCheveron />
      <DownCheveron />
      <RefreshIcon />
      <LikeIcon />
      <BulbSvg />
    </div>
  );
}
