import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild(TabsetComponent, {static: true}) tabset: TabsetComponent;
  public activeTab: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.tabset);
    this.fragmentTabs();
  }

  fragmentTabs(): void {
    this.route.fragment.subscribe((fragment: string) => {
      console.log('fragment', fragment);
      if (fragment) {
        let id = parseInt(fragment.charAt(fragment.length - 1));
        console.log('id', id);
        console.log(this.tabset);
        this.tabset.tabs[id].active = true;
      }
    });
  }
}
