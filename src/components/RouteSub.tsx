import React from "react";
import { Route, Routes } from "react-router-dom";
const renderSubRouter = (routes: any[]) => {
  return (
    <>
      {routes.map((route, index) => {
        return (
          <Route
            element={route.element}
            index={route.index}
            key={route.path + index}
            path={route.path}
          >
            {renderSubRouter(route.children ?? [])}
          </Route>
        );
      })}
    </>
  );
};
export interface IRoutes {
  element?: React.ReactNode;
  index?: boolean;
  children?: IRoutes[];
  path?: string;
}
export interface IRouteSub {
  routes: IRoutes[];
}
const RouteSub = (props: IRouteSub) => {
  return <Routes>{renderSubRouter(props.routes)}</Routes>;
};
export default RouteSub;
