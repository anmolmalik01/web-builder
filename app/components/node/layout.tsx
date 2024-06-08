import { withNode } from '~/components/node/connector';
import { SettingsControl } from '../settings-control';
import React from 'react';
import { Element } from '@craftjs/core';

const draggable = true;
const droppable = true;

interface OneBlockProps extends React.HTMLAttributes<HTMLDivElement> {}

export const OneBlock = React.forwardRef<HTMLDivElement, OneBlockProps>(
  ({ ...props }, ref) => {
    const Comp = 'div';
    return <Comp ref={ref} {...props} />;
  }
);

OneBlock.displayName = 'div';

export const NodeOneBlock = withNode(OneBlock, {
  draggable,
  droppable,
});

NodeOneBlock.craft = {
  ...NodeOneBlock.craft,
  props: {
    className: 'w-full',
  },
  related: {
    toolbar: SettingsControl,
  },
};


interface NodeTwoBlocksProps extends React.HTMLAttributes<HTMLDivElement> {}

// Row interface
export const NodeTwoRows = ({ ...props }: NodeTwoBlocksProps) => {
  return (
    <NodeOneBlock {...props}>
      <Element
        canvas
        is={NodeOneBlock as typeof NodeOneBlock & string}
        id="first-row"
      />
      <Element
        canvas
        is={NodeOneBlock as typeof NodeOneBlock & string}
        id="second-row"
      />
    </NodeOneBlock>
  );
};
NodeTwoRows.craft = {
  displayName: 'div',
  props: {
    className: 'flex flex-row m-2 p-4',
  },
  related: {
    toolbar: SettingsControl,
  },
};


// Col interface
export const NodeTwoCols = ({ ...props }: NodeTwoBlocksProps) => {
  return (
    <NodeOneBlock {...props}>
      <Element
        canvas
        is={NodeOneBlock as typeof NodeOneBlock & string}
        id="first-row"
      />
      <Element
        canvas
        is={NodeOneBlock as typeof NodeOneBlock & string}
        id="second-row"
      />
    </NodeOneBlock>
  );
};
NodeTwoCols.craft = {
  displayName: 'div',
  props: {
    className: 'flex flex-col m-2 p-4',
  },
  related: {
    toolbar: SettingsControl,
  },
};