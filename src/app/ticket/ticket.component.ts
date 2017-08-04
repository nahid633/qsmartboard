import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {trigger, state , style, transition , animate } from '@angular/animations';
import {TranslateService} from 'ng2-translate';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  animations: [
    trigger( 'divState', [
    state('start', style ({
      // transform: 'translateX(0)',
      opacity: 1,
    })),
      state('end', style ({
        // transform: 'translateX(-200px)',
        opacity: 0,
      })),
      transition('start <=> end', animate('3000ms' )),
    ]),
  ]
})
  export class TicketComponent implements OnInit {
  @ViewChild('vidRef', {read: ElementRef}) vidRef: ElementRef;
  @ViewChild('imgRef', {read: ElementRef}) imgRef: ElementRef;

  constructor(private translate: TranslateService, dataService: DataServiceService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('az');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('az');
    setInterval(() => {
      this.today = new Date();
    }, 1000);
    setInterval(() => {
      this.onAnimate();
    }, 5000);
  }
  activeSlideIndex = 0;
  counter = 0;
  state = 'end';
  today = new Date();
  header = this.translate.instant('header');
  sourcesVid = [
    {"url": "1.mp4"},
    {"url": "2.mp4"},
    {"url": "3.mp4"},
    {"url": "4.mp4"},
    {"url": "5.mp4"},
    {"url": "6.mp4"},
    {"url": "7.mp4"},
    {"url": "8.mp4"},
    {"url": "9.mp4"},
    {"url": "10.mp4"}
  ];
  sourcesImg = ['la.jpg', 'chicago.jpg', 'ny.jpg', 'ny.jpg'];
  serviceData = [
    {"point": 1, "ticket": 145},
    {"point": 3, "ticket": 154},
    {"point": 2, "ticket": 148},
    {"point": 5, "ticket": 145},
    {"point": 6, "ticket": 78},
    {"point": 8, "ticket": 14},
    {"point": 9, "ticket": 154},
    {"point": 10, "ticket": 148},
    {"point": 11, "ticket": 145},
    {"point": 12, "ticket": 78}
  ];
  ngOnInit() {
    this.imgRef.nativeElement.style = ['visibility : hidden'];
    this.vidRef.nativeElement.style = ['visibility : visible'];
  }
  onAnimate() {
    this.state = (this.state === 'start' ? 'end' : 'start');
  }
  nextClip() {
    if (this.counter === this.sourcesVid.length - 1) {
      this.vidRef.nativeElement.style = ['visibility : hidden'];
      this.imgRef.nativeElement.style = ['visibility : visible'];
      this.vidRef.nativeElement.src = 'assets/video/' + this.sourcesVid[this.counter].url;
     if ( this.imgRef.nativeElement.style.visibility === 'hidden') {
       this.activeSlideIndex = 0;
     }
    } else {
      this.counter++;
      this.vidRef.nativeElement.src = 'assets/video/' + this.sourcesVid[this.counter].url;
    }
  }
  isActive() {
    if (this.activeSlideIndex === this.sourcesImg.length - 1) {
      if ( this.vidRef.nativeElement.style.visibility !== 'visible') {
        this.counter = -1;
      }
        this.vidRef.nativeElement.style = ['visibility : visible'];
        this.imgRef.nativeElement.style = ['visibility : hidden'];
    }
  }
}
