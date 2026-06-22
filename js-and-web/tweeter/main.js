import { Tweeter } from './model.js';
import { Renderer } from './render.js';

const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());