import { AuthorModel } from './author.model';


export class BookModel {

    id: number;
    title: string;
    subtitle: string;
    chapterAmount: number;
    firstPublishYear: number;
    fileDir: string;
    coverDir: string;
    language: string[];
    ISBN: string[];
    author: AuthorModel;
    addDate: Date;
}