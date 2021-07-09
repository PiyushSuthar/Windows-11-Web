interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

export const CloseIcon = ({
  width = "24",
  height = "24",
  color = "#fff",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="21" y1="3" x2="3" y2="21"></line>
      <line x1="3" y1="3" x2="21" y2="21"></line>
    </svg>
  );
};
export const MaximizeIcon = ({
  width = "24",
  height = "24",
  color = "#ffffff",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11.25C6 8.35051 8.3505 6 11.25 6H36.75C39.6495 6 42 8.3505 42 11.25V36.75C42 39.6495 39.6495 42 36.75 42H11.25C8.35051 42 6 39.6495 6 36.75V11.25ZM11.25 8.5C9.73122 8.5 8.5 9.73122 8.5 11.25V36.75C8.5 38.2688 9.73122 39.5 11.25 39.5H36.75C38.2688 39.5 39.5 38.2688 39.5 36.75V11.25C39.5 9.73122 38.2688 8.5 36.75 8.5H11.25Z"
        fill={color}
      />
    </svg>
  );
};

export const RestoreIcon = (props: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.08496 4C5.29088 3.4174 5.8465 3 6.49961 3H9.99961C11.6565 3 12.9996 4.34315 12.9996 6V9.5C12.9996 10.1531 12.5822 10.7087 11.9996 10.9146V6C11.9996 4.89543 11.1042 4 9.99961 4H5.08496Z"
        fill="#212121"
      />
      <path
        d="M4.5 5H9.5C10.3284 5 11 5.67157 11 6.5V11.5C11 12.3284 10.3284 13 9.5 13H4.5C3.67157 13 3 12.3284 3 11.5V6.5C3 5.67157 3.67157 5 4.5 5ZM4.5 6C4.22386 6 4 6.22386 4 6.5V11.5C4 11.7761 4.22386 12 4.5 12H9.5C9.77614 12 10 11.7761 10 11.5V6.5C10 6.22386 9.77614 6 9.5 6H4.5Z"
        fill="#212121"
      />
    </svg>
  );
};
export const MinimizeIcon = ({
  width = "24",
  height = "24",
  color = "#fff",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="3" y1="12.5" x2="21" y2="12.5"></line>
    </svg>
  );
};
export const BackIcon = ({ width = "16", height = "16" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...{ width, height }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-arrow-left"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);
