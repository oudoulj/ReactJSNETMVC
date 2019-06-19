using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactJSNETMVC.ReactConfig), "Configure")]

namespace ReactJSNETMVC
{
	public static class ReactConfig
	{
		public static void Configure()
		{
			// If you want to use server-side rendering of React components, 
			// add all the necessary JavaScript files here. This includes 
			// your components as well as all of their dependencies.
			// See http://reactjs.net/ for more information. Example:
			ReactSiteConfiguration.Configuration
				.SetReuseJavaScriptEngines(true)
				.SetLoadBabel(true)
				.SetLoadReact(false)
				.SetBabelVersion(BabelVersions.Babel7)
				.AddScriptWithoutTransform("~/Scripts/dist/runtime.js")
				.AddScriptWithoutTransform("~/Scripts/dist/vendor.js")
				.AddScriptWithoutTransform("~/Scripts/dist/components.js");

			JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName;
			JsEngineSwitcher.Current.EngineFactories.AddV8();
		}
	}
}