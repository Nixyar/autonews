import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "@components/button/button.component";
import {ModalWindowComponent} from "@components/modal-window/modal-window.component";
import {InputComponent} from "@components/input/input.component";
import {FormControl, FormGroup} from "@angular/forms";
import {INewsList} from "@interfaces/news.interface";
import {GlobalService} from "../../../services/global.service";

export interface INewsInput {
  label: string;
  inputName: string;
  type?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ModalWindowComponent, InputComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isOpenModal: boolean = false;
  fileSelect: string | any | null = null;
  createNewsInputs: INewsInput[] = [
    {
      label: 'Название',
      inputName: 'title'
    },
    {
      label: 'Описание',
      inputName: 'description'
    },
    {
      label: 'Картинка',
      inputName: 'photo',
      type: 'file'
    },
  ];

  createNewsForm = new FormGroup({
    title: new FormControl<string>(''),
    description: new FormControl<string>(''),
    photo: new FormControl<string | null>(null)
  });

  constructor(public globalService: GlobalService) {
  }

  checkValidForm(): boolean {
    return !(this.createNewsForm.get('title')?.value?.length && this.createNewsForm.get('description')?.value?.length);
  }

  openCreateNewsModal(): void {
    this.isOpenModal = !this.isOpenModal;
    document.body.style.overflow = this.isOpenModal ? 'hidden' : 'auto';
  }

  saveFileFormat(fileInput: any): void {
    this.getBase64(fileInput.target.files[0]).then(
      data => this.fileSelect = data
    );
  }

  getBase64(file: Blob): Promise<string | any | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  saveNews(): void {
    const news: INewsList = {
      categoryType: 'Локальная',
      description: this.createNewsForm.get('description')?.value || '',
      fullUrl: null,
      id: null,
      publishedDate: new Date(),
      title: this.createNewsForm.get('title')?.value || '',
      titleImageUrl: this.fileSelect || '',
      url: null,
    };
    let newsArr = <INewsList[] | null>JSON.parse(<string>localStorage.getItem('createdNews'));
    if (newsArr?.length) {
      newsArr.unshift(news);
    } else {
      newsArr = [news];
    }
    localStorage.setItem('createdNews', JSON.stringify(newsArr));
    this.createNewsForm.reset();
    this.openCreateNewsModal();
    this.globalService.newsLists$.next([news, ...this.globalService.newsLists$.getValue()])
  }
}
