import React from "react";
import {cva, type VariantProps} from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
  variants:{
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-sm": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold"
    }
  },
  defaultVariants: {
    variant: "body-sm"
  }
})

interface TextProps extends VariantProps<typeof textVariants>{ //Tipando os dados
  as?: keyof React.JSX.IntrinsicElements; //Mapeando cada elemento para a sua tag HTML correspondente (qualquer chave do objeto)
  className?: string;
  children: React.ReactNode; //Representa tudo que o React pode renderizar, todos os tipos

}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}