import xw from "xwind/macro";
import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";

const Button = styled.button(xw`
  bg-indigo-600
  hover:bg-indigo-500
  focus[outline-none border-indigo-700 ring]
  active:bg-indigo-700
  transition duration-150 ease-in-out
`);

const base = xw`relative flex justify-center w-64 min-w-full px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md `;
const styles = {
  base: base,
  button: xw`
    bg-teal-600
    hover:bg-teal-500
    focus[outline-none border-teal-700 ring ]
    active:bg-teal-700
    transition duration-150 ease-in-out
  `,

  cssBase: css(base),
  cssButton: css(xw`
    bg-gray-600
    hover:bg-gray-500
    focus[outline-none border-gray-700 ring]
    active:bg-gray-700
    transition duration-150 ease-in-out
  `),
};

const Index = () => (
  <div css={xw`grid items-center justify-center h-screen`}>
    <Button css={styles.base}>Emotion + Tailwind</Button>
    <button css={[styles.base, styles.button]}>Emotion + Tailwind</button>
    <button className={cx(styles.cssBase, styles.cssButton)}>
      Emotion + Tailwind
    </button>
  </div>
);

export default Index;
