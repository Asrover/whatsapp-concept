declare module "*.svg" {
    const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
    export default ReactComponent;
}

declare module "react-loader-spinner" {
    const ReactComponent: React.FC<any>;
    export default ReactComponent;
}