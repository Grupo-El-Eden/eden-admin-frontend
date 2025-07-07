import Confetti from "react-confetti";
import useConfetti from "@hooks/useConfetti";
import { useViewportSize } from "@mantine/hooks"

export interface IConfettiProvider {
  children: React.ReactNode;
}

export const ConfettiProvider = ({ children }: IConfettiProvider) => {
  const { isRunning } = useConfetti();
  const { width, height } = useViewportSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        gravity={0.05}
        recycle={isRunning}
        opacity={isRunning ? 1 : 0}
      />
      {children}
    </>
  )
}