"use client";

import { ChevronsLeftRight } from "lucide-react";

// Custom cursor component, visible when hovering over an element
const Cursor = ({ visible, pos, display }: { visible: boolean; pos: { x: number; y: number }; display: string }) => {
    return (
        <>
            {visible && (
                <div
                    style={{
                        top: pos.y,
                        left: pos.x
                    }}
                    className={`${display} absolute z-[999] p-3 bg-white rounded-full pointer-events-none`}
                >
                    <ChevronsLeftRight />
                </div>
            )}
        </>
    );
};

export default Cursor;
