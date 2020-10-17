import tw from "@tailwindcssinjs/macro";
import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";

const Button = styled.button(tw`
  bg-indigo-600
  hover:bg-indigo-500
  focus[outline-none border-indigo-700 shadow-outline-indigo]
  active:bg-indigo-700
  transition duration-150 ease-in-out
`);

const base = tw`relative flex justify-center w-64 min-w-full px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md `;
const styles = {
  base: base,
  button: tw`
    bg-teal-600
    hover:bg-teal-500
    focus[outline-none border-teal-700 shadow-outline-teal]
    active:bg-teal-700
    transition duration-150 ease-in-out
  `,

  cssBase: css(base),
  cssButton: css(tw`
    bg-gray-600
    hover:bg-gray-500
    focus[outline-none border-gray-700 shadow-outline-gray]
    active:bg-gray-700
    transition duration-150 ease-in-out
  `),
};

const Index = () => (
  <div css={tw`grid items-center justify-center h-screen`}>
    <Button css={styles.base}>Emotion + Tailwind</Button>
    <button css={[styles.base, styles.button]}>Emotion + Tailwind</button>
    <button className={cx(styles.cssBase, styles.cssButton)}>
      Emotion + Tailwind
    </button>
  </div>
);

export default Index;
