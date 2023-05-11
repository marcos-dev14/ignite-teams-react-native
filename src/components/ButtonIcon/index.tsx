import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap; // Essa tipagem me entrega todas as opções de icons disponíveis no MaterialIcons
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({
  icon,
  type = "primary",
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon 
        name={icon}
        type={type}
      />
    </Container>
  );
}