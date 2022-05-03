import { useLayer, useHover, Arrow } from 'react-laag';
import PropTypes from 'prop-types';
import styles from './ToolTip.module.scss';

function ToolTip({ children, content }) {
  const [isOver, hoverProps] = useHover();

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    auto: true,
    triggerOffset: 4,
    arrowOffset: 4,
    containerOffset: 30,
    possiblePlacements: ['top-center', 'bottom-center'],
  });

  return (
    <>
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
      {isOver &&
        renderLayer(
          <div className={styles.tooltip} {...layerProps}>
            {content}
            <Arrow {...arrowProps} backgroundColor="#1570EF" />
          </div>
        )}
    </>
  );
}

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.any,
};

export default ToolTip;
