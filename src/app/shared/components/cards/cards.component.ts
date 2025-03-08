import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dev-avonale-cards',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() name?: string;
  @Input() img?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() date?: string;
  @Input() avatar_url?: string;
  @Input() stars: number | undefined;
  @Input() private?: boolean;
  starsArray: boolean[] = [];
  @Input() owner?: any;
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  @Input() repoUrl?: string;
  @Output() userClicked = new EventEmitter<any>();

  ngOnInit() {
    if (this.stars !== undefined) {
      this.starsArray = new Array(5)
        .fill(false)
        .map((_, i) => i < (this.stars || 0));
    }
  }

  openRepoUrl() {
    if (this.repoUrl) {
      window.open(this.repoUrl, '_blank');
    }
  }

  openUserModal() {
    if (this.owner) {
      this.userClicked.emit(this.owner);
    }
  }
}
