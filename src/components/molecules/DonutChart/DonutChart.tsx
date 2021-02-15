import React from 'react';
import { View } from 'react-native';

import Svg, { Circle, G } from 'react-native-svg';
import { DonutChartProps } from './DonutChartModel';
import { Label } from '../../atoms/Typography';
import colors from '../../../theme/colors';

/**
 * The DonutChart component is used to display a progress
 * @param donutChartProps - The DonutChart's props
 * @returns A react native custom DonutChart component
 */
export const DonutChart: React.FC<DonutChartProps> = (donutChartProps: DonutChartProps):
JSX.Element => {
  const donutOuterRadius: number = donutChartProps.radius! + donutChartProps.strokeWidth!;
  const circumference: number = 2 * Math.PI * donutChartProps.radius!;

  const percentage = 100 * (donutChartProps.value / donutChartProps.max!);
  const strokeDashoffset = percentage > 100 ? 0 : circumference
  - (circumference * percentage) / 100;

  return (
    <View
      style={{
        width: donutChartProps.radius! * 2,
        height: donutChartProps.radius! * 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{
        flexDirection: 'row',
        alignSelf: 'center',
        zIndex: 99,
      }}>
        <Label
          fontSize={donutChartProps.radius! / 2}
          color={donutChartProps.textColor}
          fontWeight={500}
          padding={0}
        >
          {percentage > 100 ? '100%' : `${percentage}%`}
        </Label>

      </View>
      <Svg
        height={donutChartProps.radius! * 2}
        width={donutChartProps.radius! * 2}
        viewBox={`0 0 ${donutOuterRadius * 2} ${donutOuterRadius * 2}`}
        style={{ position: 'absolute' }}
      >
        <G rotation="-90" originX={donutOuterRadius} originY={donutOuterRadius}>
          <Circle
            cx="50%"
            cy="50%"
            r={donutChartProps.radius}
            stroke={colors[donutChartProps.color!]}
            strokeWidth={donutChartProps.strokeWidth}
            fill={colors[donutChartProps.color!]}
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

/** Setting the defaults for the props */
DonutChart.defaultProps = {
  color: 'accent',
  textColor: 'primary',
  radius: 80,
  strokeWidth: 15,
  max: 100,
};
