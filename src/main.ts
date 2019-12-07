// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import * as trace from "@nativescript/core/trace";
import { AppModule } from "./app/app.module";

trace.setCategories([
    trace.categories.NativeLifecycle,
    trace.categories.Navigation,
    // trace.categories.Transition,
  ].join(','));
trace.enable();

platformNativeScriptDynamic().bootstrapModule(AppModule);
