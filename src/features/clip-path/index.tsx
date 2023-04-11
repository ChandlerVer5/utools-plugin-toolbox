import { useRef } from 'react';
import type { AllFeature } from '../types';
// @ts-ignore
import HTML from '@/components/HTML/Renderer';
import IndexHTML from './index.html?raw';
import { useScript } from '@/hooks/useScript';
// @ts-ignore
import Iframe from 'react-iframe';

// import './style.scss';

// from `public` dir
const jsLibPath = '/features/clip-path/';

// const libs = [
//   jsLibPath + 'jquery.min.js',
//   jsLibPath + 'flickity.pkgd.min.js',
//   jsLibPath + 'draggabilly.min.js',
//   jsLibPath + 'dev-clip.js'
// ];

export default function ClipPath({ onClose }: AllFeature) {
  const clipRef = useRef(null);

  if (onClose) {
    onClose(() => {
      // clipRef.current = null;
      console.log(clipRef.current);
    });
  }

  // const scripts = libs.map((lib) => {
  //   const status = useScript({
  //     src: lib,
  //     parent: clipRef.current
  //   });
  //   return { path: lib, status };
  // });

  return (
    <Iframe
      url={jsLibPath + 'index.html'}
      id=''
      className='w-screen h-screen'
      display='block'
      position='relative'
    />
    // <div className='kit-clip-path' ref={clipRef}>
    //   <HTML html={IndexHTML}></HTML>
    // </div>
  );
}
