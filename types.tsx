/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

//  import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
 }
 
 export type RootStackParamList = {
   Home: NavigatorScreenParams<RootTabParamList> | undefined;
   ListDetail: undefined;
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
 export type RootTabParamList = {
   Home: undefined;
   Profile: undefined;
   Logo: undefined;
   Home2: undefined
 };
 
 
 
 export type RootDrawerParamList = {
   Home2: undefined;
   Profile: undefined;
   Logo: undefined;
 };
 