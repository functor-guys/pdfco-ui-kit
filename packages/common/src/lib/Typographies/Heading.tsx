import { ConfigProvider, Typography } from 'antd';
import React, { useMemo } from 'react';

const DEFAULT_FONT_WEIGHT = 600;

type LevelType = 1 | 2 | 3 | 4;

type TypographyProps = React.ComponentProps<typeof Typography>;

interface HeadingProps extends TypographyProps {
  level?: LevelType;
}

const Heading: React.FC<HeadingProps> = ({ level, ...props }) => {
  const themeTokenProps = useMemo(() => {
    const makeFontWeightStrong = (level: LevelType) => {
      const mapping = {
        1: 700,
        2: 700,
        3: 700,
        4: 900,
      };

      return {
        fontWeightStrong: mapping[level] || DEFAULT_FONT_WEIGHT,
      };
    };

    return {
      fontSizeHeading1: 24,
      lineHeightHeading1: 32 / 24,
      fontSizeHeading2: 20,
      lineHeightHeading2: 28 / 20,
      fontSizeHeading3: 18,
      lineHeightHeading3: 24 / 18,
      fontSizeHeading4: 14,
      lineHeightHeading4: 20 / 14,
      ...makeFontWeightStrong(level!),
    };
  }, [level]);

  return (
    <ConfigProvider
      theme={{
        token: themeTokenProps,
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
        },
      }}
    >
      <Typography.Title level={level} {...props} />
    </ConfigProvider>
  );
};

export default Heading;
