import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

//Bottom Navigation Imports

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// Routing
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";

// Screens
import Login from "./screens/Login";

const Education = () => {
  return (
    <View>
      <Text>Education Screen</Text>
      <Text>Repository: github.com/sjjdgg/rahahan</Text>
    </View>
  );
};

const Duties = () => (
  <View>
    <Text>Duties Screen</Text>
  </View>
);

const Organization = () => (
  <View>
    <Text>Organization Screen</Text>
  </View>
);

const Welfare = () => (
  <View>
    <Text>Welfare Screen</Text>
  </View>
);

const Services = () => (
  <View>
    <Text>Services Screen</Text>
  </View>
);

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const Main = () => {
  console.log("hello");
  console.log(useRouteMatch());
  const { path } = useRouteMatch() as { path: string };
  const [value, setValue] = React.useState("education");

  const classes = useStyles();

  const history = useHistory();

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    history.push(`${path}/${value}`);
  }, [history, path, value]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Switch>
          <Route path={`${path}/education`}>
            <Education />
          </Route>
          <Route path={`${path}/duties`}>
            <Duties />
          </Route>
          <Route path={`${path}/organization`}>
            <Organization />
          </Route>
          <Route path={`${path}/welfare`}>
            <Welfare />
          </Route>
          <Route path={`${path}/services`}>
            <Services />
          </Route>
          {/* <Route exact path={path}>
            <Redirect exact from={path} to={`${path}/education`} />
          </Route> */}
        </Switch>
      </View>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          label="آموزش"
          value="education"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="کارتابل وظایف"
          value="duties"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="اطلاعات سازمانی"
          value="organization"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="رفاهی و سلامت"
          value="welfare"
          icon={<FolderIcon />}
        />
        <BottomNavigationAction
          label="خدمات پرسنلی"
          value="services"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </View>
  );
};

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/">
          <Redirect exact from="/" to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
