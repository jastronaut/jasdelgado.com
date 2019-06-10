import React from "react"

import Template from "../components/template"
import SEO from "../components/seo"
import ArtImg from "../components/artimg"
import BigImg from "../components/bigimg"
import EventListener from 'react-event-listener';
import '../css/art.css'
import resetBgFade from "../components/imganimation"

class ImgInfo {
    constructor(img, title, caption, index = 0) {
        this.img = img
        this.title = title
        this.caption = caption
        this.index = index
    }
}

class Art extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: {
                "2018": [
                    new ImgInfo(
                        "2018-01-26_antarterssketch.jpg",
                        "Girl and Cat",
                        "January 2018. Procreate on iPad. Sketch made at a Jam session by my school's art club."
                    ),
                    new ImgInfo(
                        "2018-03-17_starry.jpg",
                        "Starry",
                        "March 2018. Procreate on iPad. Procrastinated on studying for finals with this one!"
                    ),
                    new ImgInfo(
                        "2018-04-06_smallgirl.jpg",
                        "Art Club Drawing 2",
                        "April 2018. Procreate on iPad."
                    ),
                    new ImgInfo(
                        "2018-12-20_leaf.jpg",
                        "Girl and Cheese Plant",
                        "December 2018. Procreate on iPad."
                    ),
                ],
                "2017": [
                    new ImgInfo(
                        "2017-06-04_notreal.jpg",
                        "Not a Real Human Being",
                        "June 2017. Procreate on iPad. Comfort art."
                    ),
                    new ImgInfo(
                        "2017-07-26_practice.jpg",
                        "Practice",
                        "Practice",
                        "July 2017. Procreate on iPad. Unfinished portrait."
                    ),
                    new ImgInfo(
                        "2017-12-26_xmas.jpg",
                        "Merry Christmas 2017",
                        "December 2017. Procreate on iPad. Recreated an older piece from 2013!"
                    ),
                ],
                "2016": [
                    new ImgInfo(
                        "2016-05-28 angel.jpg",
                        "Portrait",
                        "May 2016. MyPaint on Linux. Used a photo reference."
                    ),
                    new ImgInfo(
                        "2016-08-01_cutie.jpg",
                        "Cutie Portrait",
                        "August 2016. Photoshop. Commission for a deviantart user."
                    ),
                    new ImgInfo(
                        "2016-08-15_thisone.jpg",
                        "Lucianne Portrait #503375",
                        "August 2016. Photoshop. Experimented with painting styles."
                    ),
                    new ImgInfo(
                        "2016-08-24_mia.jpg",
                        "Mia (Fire Emblem)",
                        "August 2016. Photoshop. Used as a reference to sell commissions."
                    ),
                    new ImgInfo(
                        "2016-08-29_magazinegirl.jpg",
                        "Magazine Girl",
                        "August 2016. Photoshop. Loosely used a photo reference."
                    ),
                    new ImgInfo(
                        "2016-10-24_gr.jpg",
                        "Girl",
                        "October 2016. Clip Studio Paint."
                    ),
                    new ImgInfo(
                        "2016-12-16_practicesm.jpg",
                        "Lucianne Portrait",
                        "December 2016. Clip Studio Paint + Photoshop."
                    ),
                ],
                "2015": [
                    new ImgInfo(
                        "2015-01-11_ssgift.jpg",
                        "Secret Santa Gift",
                        "January 2015. Photoshop. Made for a Secret Santa art exchange on deviantart."
                    ),
                    new ImgInfo(
                        "2015-03-02_cosmiclatte.jpg",
                        "Cosmic Latte (Self-Portrait)",
                        "March 2015. Paint Tool Sai. Background color is <a href='https://en.wikipedia.org/wiki/Cosmic_latte'>cosmic latte</a>."
                    ),
                    new ImgInfo(
                        "2015-04-30_notagain.jpg",
                        "Not Again (Self-Portrait)",
                        "April 2015. Paint Tool Sai + Photoshop. Pop-art study for my IB Art class in high school."
                    ),
                ],
                "2014": [
                    new ImgInfo(
                        "2014-05-25-spiderhead.jpg",
                        "Spiderhead",
                        "May 2014. Paint Tool Sai. Inspired by a Cage the Elephant song by the same name (and was featured on <a href='https://web.archive.org/web/20190608201556/https://cagetheelephantofficial.tumblr.com/post/93317319201/by-jasmine-delgado'>their tumblr</a>)."
                    ),
                    new ImgInfo(
                        "2014-06-03_klk.jpg",
                        "Portrait of Ryuko from Kill La Kill",
                        "June 2014. Paint Tool Sai. Tried to go for a more realistic technique (Didn't work lol). I still like how I did the hair!"
                    ),
                    new ImgInfo(
                        "2014-06-13_link.jpg",
                        "Link",
                        "June 2014. Paint Tool Sai. Tried to use a limited color palette."
                    ),
                    new ImgInfo(
                        "2014-08-25_badday.jpg",
                        "Self-Portait",
                        "August 2014. Paint Tool Sai + Picture Reference"
                    ),
                    new ImgInfo(
                        "2014-11-15-nighttime.jpg",
                        "Alariss Sketch",
                        "November 2014. Paint Tool Sai (Switched to a Surface Pro  3 from a Wacom Tablet)"
                    ),
                ],
                "2013": [
                    new ImgInfo(
                        "2013-02-17-marina.jpg",
                        "Marina Portrait",
                        "February 2013. Paint Tool Sai"
                    ),
                    new ImgInfo(
                        "2013-12-24-merryxmas.jpg",
                        "Christmas Portrait of Ruma, Alariss, and Lucianne",
                        "December 2013. Paint Tool Sai"
                    ),
                ],
                "2012": [
                    new ImgInfo(
                        "2012-10-20_alex.jpg",
                        "Alex Trimble Portrait",
                        "October 2012. Paint Tool Sai. Portrait of Two Door Cinema Club's Alex Trimble"
                    ),
                    new ImgInfo(
                        "2012-12-01_selfportrait.jpg",
                        "Self-portrait",
                        "December 2012. Paint Tool Sai. Followed a technique for the gradient + flat coloring technique"
                    ),
                ],
            },
            gallery: [],
            curImg: null,
        }

        this.allImages = [];
        this.imgCount = 0;
        this.state.gallery = this.getGallery();

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.clickImg = this.clickImg.bind(this);
    }

    clickImg(info) {
        let bgImgZoom = document.querySelector("#bg-img-zoom");
        let imgHolder = document.querySelector("#imgHolder");
        bgImgZoom.style.visibility = "visible";
        if (bgImgZoom.classList.contains("bgImgFade")) {
            bgImgZoom.classList.remove("bgImgFade");
        }
        resetBgFade("normal", "rgba(0,0,0,0.75)", 1, bgImgZoom, imgHolder);
        this.setState({
            curImg: info
        });
    }

    closeImg(i) {
        let bgImgZoom = document.querySelector("#bg-img-zoom")
        bgImgZoom.style.visibility = "hidden"
        resetBgFade(
            "reverse",
            "rgba(0,0,0,0)",
            0,
            bgImgZoom,
            document.querySelector("#imgHolder")
        )
    }

    getGallery() {
        var gallery = [];
        const images = this.state.images;
        for (var year in images) {
            for (var imginfo of images[year]) {
                imginfo.index = this.imgCount;
                gallery.unshift(
                    <ArtImg
                        key={imginfo.img}
                        img={imginfo.img}
                        alttxt={imginfo.title + "|" + imginfo.caption}
                        imgInfo={imginfo}
                        click={i => this.clickImg(i)}
                        index={this.imgCount}
                    />
                );
                // console.log("set " + imginfo.img + " to " + imginfo.index + "(" + this.imgCount + ")");
                this.allImages.push(imginfo);
                this.imgCount++;
            }
            gallery.unshift(<h3 key={year}>{year}</h3>);
        }
        this.state.curImg = images[2018][0];
        // this.setState({curImg: images[2018][0]});
        return gallery;
    }

    arrowClick(i) {
        // handle showing next/previous image
        let curIndex = this.state.curImg.index + i;
        if (curIndex < 0)
            curIndex = this.imgCount - 1;
        if (curIndex >= this.imgCount)
            curIndex = 0;
        this.setState({
            curImg: this.allImages[curIndex]
        });
    }

    handleKeyDown(e) {
        if (e.code === 'ArrowLeft')
            this.arrowClick(1);
        if (e.code === 'ArrowRight')
            this.arrowClick(-1);
        if (e.code === 'Escape')
            this.closeImg();
    }

    makeEventListener() {
        try {
            document.querySelector('p');
        } catch (exception) {
            console.log("no document available");
            return (
                <></>
            );
        }
        return (
            <EventListener
                target={document}
                onKeyDown={(e) => this.handleKeyDown(e)}
            />
        );
    }

    render() {
        return (
            <Template>
                <SEO title="Art" />
                {this.makeEventListener()}
                <BigImg
                    imgTitle={this.state.curImg.title}
                    imgCaption={this.state.curImg.caption}
                    imgSrc={this.state.curImg.img.replace('jpg', 'png')}
                    arrowClick={i => this.arrowClick(i)}
                    closeImg={i => this.closeImg(i)}
                />
                <div className="line-div"></div>
                {this.state.gallery}
            </Template>
        )
    }
}

export default Art
