import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  response: HighlightResult;
  code: string;
  classTitle: string;
  codeSubscr: Subscription;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.codeSubscr = this.commonService.code.subscribe(codeData => {
      this.code = codeData.getCode();
      this.classTitle = codeData.getClassTitle();
    });
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance
    };
  }

  ngOnDestroy() {
    this.codeSubscr.unsubscribe();
  }
}
