"use client";

import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import { Icon, type IconProps } from '@iconify/react'

type AppIconProps =
    | ({ icon: string } & HTMLAttributes<HTMLSpanElement>)
    | ({ component: boolean } & IconProps);

function AppIcon(props: AppIconProps) {

    if ('component' in props && props.component) {
        // component mode

        const { component, ...iconProps } = props;
        return (
            <abbr className="leading-[0]">
                <Icon {...iconProps} />
            </abbr>
        );

    } else {

        // icon string mode
        const { icon, className, ...rest } = props as { icon: string } & HTMLAttributes<HTMLSpanElement>;
        return (
            <abbr className="leading-[0]">
                <span {...rest} className={clsx(`iconify ${props.icon}`, className)} ></span>
            </abbr>
        );
    }
}

export default AppIcon;
