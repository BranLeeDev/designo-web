import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TagsConfig } from '@models/tags-config.model';

@Injectable({
  providedIn: 'root',
})
export class MetatagsService {
  private meta = inject(Meta);

  updateMetaTags(config: TagsConfig) {
    this.meta.updateTag({
      name: 'description',
      content: config.description,
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: config.title,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: config.image,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: `https://designo-web.web.app/${config.slug}`,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: config.title,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: config.image,
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: `https://designo-web.web.app/${config.slug}`,
    });
  }
}
