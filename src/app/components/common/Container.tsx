import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Container({ children }: Props) {
    return <main className="container">{children}</main>;
}
