export const sizes = {
  mobile: 580,
  tablet: 768,
  smallDesktop: 1044,
  desktop: 1284,
};

type Media = {
  mobile: string;
  tablet: string;
  smallDesktop: string;
  desktop: string;
};

export const medias: Media = Object.keys(sizes).reduce(
  (acc: Media, label: string) => {
    acc[label] = `@media only screen and (max-width: ${sizes[label]}px)`;
    return acc;
  },
  {} as { [key in keyof typeof sizes]: string }
);
