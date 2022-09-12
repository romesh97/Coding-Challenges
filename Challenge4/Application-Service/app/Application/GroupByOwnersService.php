<?php

namespace App\Application;

use App\Models\Company;
use App\Models\Document;
use Illuminate\Http\Request;

class GroupByOwnersService
{
    public function getDocumentDetails(Request $request)
    {
        $companies = Company::all();
        $sampleArray = [];
        foreach ($companies as $key => $element) {
            $document = Document::where('id', '=', $element->document_id)->first();
            $element['companyName'] = $element->company_name;
            $element['documentName'] = $document->document_name;
            array_push($sampleArray, $element);
        }
        return $sampleArray;

    }
}
