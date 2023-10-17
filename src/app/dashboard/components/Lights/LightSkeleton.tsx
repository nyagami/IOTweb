import React from "react";
import styles from './Light.module.css'

import {Card, Skeleton} from "@nextui-org/react";

interface LightSkeletionProps {
  alert: boolean
}

export const LightSkeletion = ({
  alert
}: LightSkeletionProps) => {
  return (
    <div className={"h-28 w-36 md:h-64 md:w-5/6 bg-primary-300 pt-4 px-4 m-8 rounded-2xl " + (alert ? styles.alert : '')}>
        <div>
            <Skeleton className="flex rounded-2xl w-14 h-8"/>
        </div> 
        <div className="flex w-full justify-center">
            <Skeleton className="flex rounded-full w-52 h-12 md:h-48"/>
        </div> 
    </div>
  );
}
