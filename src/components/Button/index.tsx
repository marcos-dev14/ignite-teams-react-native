import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({
  title,
  type = "primary",
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}