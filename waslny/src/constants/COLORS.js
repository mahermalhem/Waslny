import React, { useEffect, Component, useState ,createRef} from 'react';
import { Button, TextInput, View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AuthContext, isCloseToBottom,
    pickPermission, ageRangeList, getColorsByThemeId ,themes,changeTheme} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

 

const COLOR={
    DEFAULT_COLOR:"#3399cc",
    DEFAULT_ICON_COLOR:"#547CFC",
    LIGHT_BLUE:'#29ABE2',
    RED:'#CC0033',
    PENDING:"#EEC543",
    //#D8323F (red) from doc
    PLATINUM:'#e5e4e2',
    //in add question screen
    FONT_COLOR:'#e5e4e2',
    BORDER_VIEW:'#A1A1A1',

    WARNING:"#f5db1d",

    //THEMES COLORS
    LINEAR_GRADIENT_COLOR_DEFAULT:['#1A2980', '#26D0CE', '#192f6a'],
    LINEAR_GRADIENT_COLOR_darkblues:['#4c669f', '#3b5998', '#192f6a'],
    LINEAR_GRADIENT_COLOR_geies:['#0f0c29', '#302b63', '#24243e'],
    LINEAR_GRADIENT_COLOR_Lawrencium:['#7F00FF', '#E100FF'],
    LINEAR_GRADIENT_COLOR_ANWER:['#334d50','#cbcaa5'],
    LINEAR_GRADIENT_COLOR_BLU:['#00416A','#E4E5E6'],
    LINEAR_GRADIENT_COLOR_PIGGY_PINK:['#ee9ca7','#ffdde1'],
    LINEAR_GRADIENT_COLOR_COOL_BLUES:['#2193b0','#6dd5ed'],
    LINEAR_GRADIENT_COLOR_MEGA_TRON:['#C6FFDD','#FBD786','#f7797d'],
    LINEAR_GRADIENT_COLOR_MOONLIT_ASTEROID:['#0F2027','#203A43',"#f7797d"],
    LINEAR_GRADIENT_COLOR_EveningSunshine:['#12c2e9','#c471ed','#f7797d'],
    LINEAR_GRADIENT_COLOR_DarkOcean:['#373B44','#4286f4'],
    LINEAR_GRADIENT_COLOR_GRADE_GREY:['#bdc3c7','#2c3e50'],
    LINEAR_GRADIENT_COLOR_CoolSky:['#2980B9','#6DD5FA','#FFFFFF'],
    LINEAR_GRADIENT_COLOR_Yoda:['#FF0099','#FF0099'],
    LINEAR_GRADIENT_COLOR_Memariani:['#aa4b6b','#6b6b83','#3b8d99'],
    LINEAR_GRADIENT_COLOR_Amin:['#8E2DE2','#4A00E0'],
    LINEAR_GRADIENT_COLOR_ByDesign:['#009FFF','#ec2F4B'],
    LINEAR_GRADIENT_COLOR_UltraVoilet:['#654ea3','#eaafc8'],
    LINEAR_GRADIENT_COLOR_BurningOrange:['#FF416C','#FF4B2B'],
    LINEAR_GRADIENT_COLOR_Wiretap:['#8A2387','#E94057','#F27121'],
    LINEAR_GRADIENT_COLOR_Rastafari:['#1E9600','#FFF200','#FF0000'],
    LINEAR_GRADIENT_COLOR_SinCityRed:['#ED213A','#93291E'],
    LINEAR_GRADIENT_COLOR_BlueRaspberry:['#00B4DB','#0083B0'],
    LINEAR_GRADIENT_COLOR_Magic:['#59C173','#a17fe0','#5D26C1'],
    LINEAR_GRADIENT_COLOR_EveningNight:['#005AA7','#FFFDE4'],
    LINEAR_GRADIENT_COLOR_eXpresso:['#ad5389','#3c1053'],
    LINEAR_GRADIENT_COLOR_SlightOceanView:['#a8c0ff','#3f2b96'],
    LINEAR_GRADIENT_COLOR_MoonPurple:['#4e54c8','#8f94fb'],
    LINEAR_GRADIENT_COLOR_Harvey:['#1f4037','#99f2c8'],
    LINEAR_GRADIENT_COLOR_Neuromancer:['#f953c6','#b91d73'],
    LINEAR_GRADIENT_COLOR_AzurLane:['#7F7FD5','#86A8E7','#91EAE4'],
    LINEAR_GRADIENT_COLOR_WitchingHour:['#c31432','#240b36'],
    LINEAR_GRADIENT_COLOR_Metapolis:['#659999','#f4791f'],
    LINEAR_GRADIENT_COLOR_KyooPal:['#dd3e54','#6be585'],
    LINEAR_GRADIENT_COLOR_KyeMeh:['#8360c3','#2ebf91'],
    LINEAR_GRADIENT_COLOR_KyooTah:['#544a7d','#ffd452'],
    LINEAR_GRADIENT_COLOR_RedSunset:['#355C7D','#6C5B7B',"#C06C84"],
    LINEAR_GRADIENT_COLOR_Bighead:['#c94b4b','#4b134f'],
    LINEAR_GRADIENT_COLOR_TaranTado:['#23074d','#cc5333'],
    LINEAR_GRADIENT_COLOR_50ShadesOfGray:['#bdc3c7','#2c3e50'],
    LINEAR_GRADIENT_COLOR_Titanium:['#283048','#859398'],


}

export {COLOR};

