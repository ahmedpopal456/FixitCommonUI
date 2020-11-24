import React from "react";
import { View } from "react-native";

import { Props } from "./props.model";
import Svg, { Circle, G } from "react-native-svg";
import {Label} from "../../atoms/Typography";
import colors from "../../../theme/colors";

/**
 * The DonutChart component is used to display a progress
 * @param props - The DonutChart's props
 * @returns A react native custom DonutChart component
 */
export const DonutChart: React.FC<Props> = (props: Props): JSX.Element => {
  const donutOuterRadius: number = props.radius! + props.strokeWidth!;
  const circumference: number = 2 * Math.PI * props.radius!;

  const percentage = 100 * (props.value / props.max!);
  const strokeDashoffset = percentage > 100 ? 0 : circumference - (circumference * percentage) / 100;

  return (
    <View
      style={{
        width: props.radius! * 2,
        height: props.radius! * 2,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{
        flexDirection: 'row',
        alignSelf: 'center',
        zIndex: 99
      }}>
        <Label
          fontSize={props.radius! / 2}
          color={props.textColor}
          fontWeight={500}
          padding={0}
        >
          {percentage > 100 ? 100: percentage}%
        </Label>
        
      
      </View>
      <Svg
        height={props.radius! * 2}
        width={props.radius! * 2}
        viewBox={`0 0 ${donutOuterRadius * 2} ${donutOuterRadius * 2}`}
        style={{ position: 'absolute' }}
      >
        <G rotation="-90" originX={donutOuterRadius} originY={donutOuterRadius}>
          <Circle
            cx="50%"
            cy="50%"
            r={props.radius}
            stroke={colors[props.color!]}
            strokeWidth={props.strokeWidth}
            fill={colors[props.color!]}
            fillOpacity={0.2}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset * -1}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

/** Setting the defaults for the props*/
DonutChart.defaultProps = {
  color: "accent",
  textColor: "primary",
  radius: 80,
  strokeWidth: 15,
  max: 100,
};
