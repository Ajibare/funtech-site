import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      {props.children}
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeWidth="1.8" d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
    </BaseIcon>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeWidth="1.8" d="M6 14c1-4 4-8 8-10 2 4 1 8-1 12-3 1-5 2-7-2z" />
      <path strokeWidth="1.8" d="M9 15l-3 3m2-6H5m7-4h.01" />
    </BaseIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeWidth="1.8" d="M16 19v-1a4 4 0 0 0-8 0v1" />
      <circle strokeWidth="1.8" cx="12" cy="10" r="3" />
      <path strokeWidth="1.8" d="M20 19v-1a3 3 0 0 0-2-2.8M4 19v-1a3 3 0 0 1 2-2.8" />
    </BaseIcon>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeWidth="1.8" d="M4 20l4.5-1 10-10a2 2 0 0 0-3-3l-10 10L4 20z" />
    </BaseIcon>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeWidth="1.8" d="M10 14l4-4m-7 8l-2 2a3 3 0 1 1-4-4l2-2m12 0l2-2a3 3 0 1 1 4 4l-2 2" />
    </BaseIcon>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeWidth="1.8" d="M4 5a3 3 0 0 1 3-3h13v19H7a3 3 0 0 1-3-3V5z" />
      <path strokeWidth="1.8" d="M7 2v16a3 3 0 0 0 3 3" />
    </BaseIcon>
  );
}

export function XSocialIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeWidth="1.8" d="M5 5l14 14M19 5L5 19" />
    </BaseIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect strokeWidth="1.8" x="4" y="4" width="16" height="16" rx="2" />
      <path strokeWidth="1.8" d="M8 10v6m0-9v.01M12 16v-3a2 2 0 1 1 4 0v3" />
    </BaseIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect strokeWidth="1.8" x="4" y="4" width="16" height="16" rx="4" />
      <circle strokeWidth="1.8" cx="12" cy="12" r="3.5" />
      <circle strokeWidth="1.8" cx="17" cy="7" r="0.7" />
    </BaseIcon>
  );
}
