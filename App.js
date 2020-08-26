import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './reduxStore/store';
// import { PersistGate } from 'redux-persist/integration/react';

// @Component
import HomeTodoScreenComponent from './screens/HomeTodoScreen';
import AddTodoScreenComponent from './screens/AddTodoScreen';
import EditTodoScreenComponent from './screens/TodoScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="All My Notes">
                    <Stack.Screen name="All My Notes" component={HomeTodoScreenComponent} />
                    <Stack.Screen name="Add Note" component={AddTodoScreenComponent} />
                    <Stack.Screen name="Todo" component={EditTodoScreenComponent} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
