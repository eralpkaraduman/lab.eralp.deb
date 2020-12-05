/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { FunctionComponent, Fragment } from "react";
import raw from "raw.macro";
import ExperimentFrame from "../../components/experiment-frame";
import SourceCode from "../../components/source-code";
import BoxCanvas from "./box-canvas";
import githubSourceUrl from "../../file-github-source-url.macro";

const boxCanvasSource = raw("./box-canvas.tsx");
const boxMeshSource = raw("./box-mesh.tsx");

const BoxPage: FunctionComponent = () => (
  <Fragment>
    <h1>Box</h1>
    <p>
      You should see a rotating 3D cube animation below. This is running on
      WebGL through{" "}
      <Link href="https://github.com/react-spring/react-three-fiber">
        react-three-fiber
      </Link>
      . Which is a is a <Link href="https://reactjs.org">React</Link> reconciler
      for <Link href="https://threejs.org">Threejs</Link> on the web and
      react-native.
    </p>
    <ExperimentFrame width={200} height={200}>
      <BoxCanvas />
    </ExperimentFrame>
    <p>BoxCanvas.tsx</p>
    <SourceCode language="tsx" code={boxCanvasSource} />
    <p>BoxMesh.tsx</p>
    <SourceCode language="tsx" code={boxMeshSource} />
    <p>
      Here's the <Link href={githubSourceUrl}>full source code</Link> of this
      experiment
    </p>
  </Fragment>
);

export default BoxPage;
