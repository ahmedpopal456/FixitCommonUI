import React from "react";
import { StyledText, StyledContainer } from "./style"

import { TypographyProps } from "./TypographyModel";

/** 
 * @param props - The H1 component props
 * @returns A react native custom H1 component
 */
export const H1: React.FC<TypographyProps> = (props): JSX.Element => {
  return renderText(props);
};

H1.defaultProps = {
  fontSize: 24,
  fontWeight: 400,
  color: "dark",
  padding: 3,
  justification: "left"
};

/** 
 * @param props - The H2 component props
 * @returns A react native custom H2 component
 */
export const H2: React.FC<TypographyProps> = (props): JSX.Element => {
  return renderText(props);
};

H2.defaultProps = {
  fontSize: 18,
  fontWeight: 700,
  color: "dark",
  padding: 3,
  justification: "left"
};

/** 
 * @param props - The H3 component props
 * @returns A react native custom H3 component
 */
export const H3: React.FC<TypographyProps> = (props): JSX.Element => {
  return renderText(props);
};

H3.defaultProps = {
  fontSize: 15,
  fontWeight: 400,
  color: "dark",
  padding: 3,
  justification: "left"
};

/** 
 * @param props - The H4 component props
 * @returns A react native custom H4 component
 */
export const H4: React.FC<TypographyProps> = (props): JSX.Element => {
  return renderText(props);
};

H4.defaultProps = {
  fontSize: 13,
  fontWeight: 400,
  color: "dark",
  padding: 3,
  justification: "left"
};

/** 
 * @param props - The H5 component props
 * @returns A react native custom H5 component
 */
export const H5: React.FC<TypographyProps> = (props): JSX.Element => {
  return renderText(props);
};

H5.defaultProps = {
  fontSize: 13,
  fontWeight: 400,
  color: "grey",
  padding: 3,
  justification: "left"
};

/** 
 * @param props - The Label component props
 * @returns A react native custom Label component
 */
export const Label: React.FC<TypographyProps> = (props): JSX.Element => {
  return renderText(props);
};

Label.defaultProps = {
  fontSize: 13,
  fontWeight: 700,
  color: "dark",
  padding: 3,
  justification: "left"
};
    
/** 
 * @param props - The P component props
 * @returns A react native custom P component
 */
export const P: React.FC<TypographyProps> = (props): JSX.Element => {
  return renderText(props);
};

P.defaultProps = {
  fontSize: 13,
  fontWeight: 400,
  color: "dark",
  padding: 8,
  justification: "left"
};
    
/** 
 * Since all the typography elements are so similar appart from the default props
 * this method renders the text.
 * 
 * @param props - The component's props
 * @returns A react native custom Typography component based on the given props
 */
const renderText = (props: TypographyProps) => {
  return (
    <StyledContainer>
      <StyledText {...props}>
        {props.children}
      </StyledText>
    </StyledContainer>
  );
}
