import { useEffect } from 'react';
import useIntersection from '@/helpers/useIntersection';
import { useStateValue } from '@/context/StateProvider';
import { SET_NOT_VISIBLE, SET_VISIBLE } from '@/context/types';

export default function useToggleVisibility(ref, bodyHeight) {
  const [{ visible }, dispatch] = useStateValue();
  const LEAST_EXPECTED_HEIGHT = 200;
  const margin = bodyHeight >= LEAST_EXPECTED_HEIGHT ? '-100px' : '-20px';
  const isVisible = useIntersection(ref, null, margin);

  useEffect(() => {
    const id = ref.current.id;
    if (isVisible) {
      dispatch({ type: SET_VISIBLE, payload: id });
    } else {
      dispatch({ type: SET_NOT_VISIBLE, payload: id });
    }
    return () => dispatch({ type: SET_NOT_VISIBLE, payload: id });
  }, [visible.length, isVisible]);
}
