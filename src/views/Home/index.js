import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem, Icon,Segment } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { Col, Grid } from "react-native-easy-grid";

import {pxToDp ,ifIphoneX} from '../../utils';
import {getHome1, getHome2 } from '../../api/home';

import HomeNav from '../../components/HomeNav'

const styles = StyleSheet.create({
    banenr:{
        height: pxToDp(293),
    },
    banenrImg:{
        width: pxToDp(750),
        height: pxToDp(293)
    },
    littleBanenr:{
        height: pxToDp(400),
        width: pxToDp(285)
    },
    littleBannerImg:{
        height: pxToDp(400),
        width: pxToDp(285)
    },
    navListView:{
        flexDirection: "row", 
        flexWrap: 'wrap',
        flex: 1,
        marginLeft: pxToDp(20),
    },
    navItem:{
        alignItems:"center",
        borderRadius: 0,
        width: pxToDp(710/5),
        paddingTop: pxToDp(20),
    },
    navText:{
        fontSize: pxToDp(24),
        color:'#585858',
        lineHeight:pxToDp(42),
        includeFontPadding: false
    },
    imgStyle:{
        width: pxToDp(80),
        height: pxToDp(80),
    },
    specialWrapper:{
        flexDirection: "row", 
        flexWrap: 'wrap',
        flex: 1,
    },
    special0:{
        width: pxToDp(465),
        height: pxToDp(198),
        marginBottom: pxToDp(2)
    },
    special1:{
        width: pxToDp(230),
        height: pxToDp(200),
        marginRight: pxToDp(2)
    },
    special2:{
        width: pxToDp(232),
        height: pxToDp(200)
    },
    paginationStyle:{
        bottom: 0,
    },
    dotStyle: {
        backgroundColor:'transparent', 
        borderWidth: pxToDp(2),
        borderColor: '#fff'
    },
    activeDotStyle:{
        backgroundColor: '#fff',
        borderColor:'#fff'
    }
});

const statusHeight = ifIphoneX();
 class Home extends Component {
    constructor(){
        super();
        this.state = {
            navList: [],
            bannerList:[],
            bannerSpeed: 5,
            littleBanner:[],
            littleBannerSpeed: 2,
            specialList: [],
            adPic1: null,
            adPic2: null,
        }
    }
    componentWillMount(){
        getHome1().then((data) => {
            if (data.code) {
                this.setState({
                    navList: data.data.navList || [],
                    bannerList: data.data.slide1.pictures || [],
                    bannerSpeed: data.data.slide1.interval,
                    littleBanner: data.data.slide2.pictures || [],
                    littleBannerSpeed: data.data.slide2.interval,
                    specialList: data.data.specialList || [],
                })
            }
        });
        getHome2().then((data) => {
            if (data.code) {
                this.setState({
                    adPic1: data.data.adPic1 || null,
                    adPic2: data.data.adPic2 || null,
                })
            }
        });
    }
    navItemClick(item){
        // const linkTarget = item.linkTarget.replace(/\w+#/,'');
        console.log(item.linkTarget.split('#')[1]);
    }
    renderBanner(){
        if (this.state.bannerList.length) {
            return ( <Swiper dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle} style={styles.banenr} paginationStyle={styles.paginationStyle} loop autoplay autoplayTimeout={this.state.littleBannerSpeed}>
                {
                    this.state.bannerList.map((v) => <View key={v.link}>
                        <Image source={{uri:v.link}} style={styles.banenrImg} />
                    </View>)
                }
            </Swiper>)
        }
        return <View></View>;
    }
    rendLittleBanner() {
        if (this.state.littleBanner.length) {
            return ( <Swiper style={styles.littleBanner} showsPagination={false} loop autoplay autoplayTimeout={this.state.bannerSpeed}>
                {
                    this.state.littleBanner.map((v) => <View key={v.link}>
                        <Image source={{uri:v.link}} style={styles.littleBannerImg} />
                    </View>)
                }
            </Swiper>)
        }
        return <View></View>;
    }
    renderSpecial() {
        if (this.state.specialList.length) {
            return ( 
                    this.state.specialList.map((v, index) => <View key={v.link}>
                        <Image source={{uri:v.link}} style={styles['special' + index]} />
                    </View>)
            )
        }
        return <View></View>;
    }
    renderAd(){
        if (this.state.adPic1) {
            return <View style={{marginTop:pxToDp(2)}}><Image source={{uri:this.state.adPic1.imgLink}} style={{width:pxToDp(750),height: pxToDp(150)}} /></View>
        }
        return <View></View>
    }
    renderAd2(){
        if (this.state.adPic2) {
            return <View style={{marginTop:pxToDp(2)}}><Image source={{uri:this.state.adPic2.imgLink}} style={{width:pxToDp(750),height: pxToDp(150)}} /></View>
        }
        return <View></View>
    }
    render() {
        return (
            <Container style={{backgroundColor:'#f5f5f5'}}>
                {/* <Header/> */}
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: statusHeight}}>
                {/* banner */}
                   {this.renderBanner()}
                    {/* 导航 */}
                    <View style={styles.navListView}>
                    {
                        this.state.navList.map((v) => <View key={v.linkInfo} vertical light style={styles.navItem} onPress={()=>{console.log(1)}}>
                            <TouchableOpacity onPress={()=>{this.navItemClick(v)}}>
                            <Image source={{uri:v.link}} style={styles.imgStyle} />
                            <Text adjustsFontSizeToFit style={styles.navText}>{v.linkInfo}</Text>
                            </TouchableOpacity>
                        </View>)
                    }
                    </View>
                    {/* 小广告 */}
                    <Grid style={{paddingTop: pxToDp(20)}}>
                        <Col style={{ width: pxToDp(285),height:pxToDp(400) }}>{this.rendLittleBanner()}</Col>
                        <Col style={styles.specialWrapper}>{this.renderSpecial()}</Col>
                    </Grid>
                    {this.renderAd()}
                    {this.renderAd2()}
                    <Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> home </Text>
                </Content>
            </Container>
        );
    }
}

export default Home;
