import { Component, OnInit } from '@angular/core';
import { JournalService } from './../journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalService]
})
export class EntryListComponent implements OnInit {

  constructor(private entries: JournalService) { }
  entry : any
  ngOnInit() {
      this.entries.getList()
        .subscribe((entries) => {
            this.entry = entries;
        });
  }

}
